import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleBoldIcon],svg[ph-house-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204H52v-82.35l76-76l76 76Z"></svg:path>`,
})
export class PhHouseSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
