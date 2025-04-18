import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAddFilledIcon],svg[carbon-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"></svg:path><svg:path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z"></svg:path>`,
})
export class CarbonAddFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
