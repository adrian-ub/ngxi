import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDoneOutlineIcon],svg[ic-round-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.47 5.63c.39.39.39 1.01 0 1.4L9.13 18.37a.984.984 0 0 1-1.4 0l-4.2-4.2a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l3.5 3.5L19.07 5.63a.984.984 0 0 1 1.4 0m-2.11-2.12l-9.93 9.93l-2.79-2.79c-.78-.78-2.05-.78-2.83 0l-1.4 1.4c-.78.78-.78 2.05 0 2.83l5.6 5.6c.78.78 2.05.78 2.83 0L22.59 7.74c.78-.78.78-2.05 0-2.83l-1.4-1.4c-.79-.78-2.05-.78-2.83 0"></svg:path>`,
})
export class IcRoundDoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
