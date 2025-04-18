import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterNFilledIcon],svg[tabler-circle-letter-n-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-1.106 5.553C10.423 6.609 9 6.945 9 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3.764l2.106 4.211c.471.944 1.894.608 1.894-.447V8a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 13 8v3.764z"></svg:path>`,
})
export class TablerCircleLetterNFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
