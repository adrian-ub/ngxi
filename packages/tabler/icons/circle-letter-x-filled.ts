import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterXFilledIcon],svg[tabler-circle-letter-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.447 5.106a1 1 0 0 0-1.341.447L12 9.763l-1.106-2.21a1 1 0 0 0-1.234-.494l-.107.047a1 1 0 0 0-.447 1.341L10.88 12l-1.775 3.553a1 1 0 0 0 .345 1.283l.102.058a1 1 0 0 0 1.341-.447L12 14.236l1.106 2.211a1 1 0 0 0 1.234.494l.107-.047a1 1 0 0 0 .447-1.341L13.118 12l1.776-3.553a1 1 0 0 0-.345-1.283z"></svg:path>`,
})
export class TablerCircleLetterXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
