import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterKFilledIcon],svg[tabler-circle-letter-k-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.53 5.152a1 1 0 0 0-1.378.318L11 10.913V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276.374l.102-.056l.095-.068a1 1 0 0 0 .223-1.31L12.678 12l2.17-3.47a1 1 0 0 0-.318-1.378"></svg:path>`,
})
export class TablerCircleLetterKFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
