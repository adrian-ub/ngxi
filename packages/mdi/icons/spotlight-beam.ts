import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpotlightBeamIcon],svg[mdi-spotlight-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16.5l.91-.91l5.22 5.21l-.92.91zm6.5-6.5l.91-.91l5.22 5.21l-.92.91zM6.72 2.72l3.43 3.43l-4 4l-3.43-3.43c-.78-.78-.78-2.05 0-2.83l1.17-1.17c.78-.78 2.05-.78 2.83 0m7.85 4.78l.71.71l-7.07 7.07l-.71-.71l-.86-3.5l4.43-4.43z"></svg:path>`,
})
export class MdiSpotlightBeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
