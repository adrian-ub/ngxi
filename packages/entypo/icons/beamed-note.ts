import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBeamedNoteIcon],svg[entypo-beamed-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 1l-.002 13c0 1.243-1.301 3-3.748 3c-1.243 0-2.25-.653-2.25-1.875c0-1.589 1.445-2.55 3-2.55c.432 0 .754.059 1 .123V5.364L8 6.637V16h-.002c0 1.243-1.301 3-3.748 3C3.007 19 2 18.347 2 17.125c0-1.589 1.445-2.55 3-2.55c.432 0 .754.059 1 .123V3z"></svg:path>`,
})
export class EntypoBeamedNoteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
