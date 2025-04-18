import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonNeutralIcon],svg[mdi-emoticon-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11A1.5 1.5 0 0 1 7 9.5m9 6.5H8v-2h8zm-.5-5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8A1.5 1.5 0 0 1 17 9.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
