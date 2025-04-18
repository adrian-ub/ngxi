import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBluntedConeIcon],svg[marketeq-blunted-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c9.205 0 16.667-2.798 16.667-6.25S34.205 31.25 25 31.25S8.333 34.048 8.333 37.5S15.795 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M41.667 36.98L35.417 10C34.896 7.917 30.458 6.25 25 6.25S15.167 7.896 14.583 10l-6.25 27.083a2 2 0 0 0 0 .417c0 3.458 7.459 6.25 16.667 6.25s16.667-2.792 16.667-6.25q.03-.26 0-.52"></svg:path><svg:path stroke="#344054" d="M25 14.583c5.753 0 10.417-1.865 10.417-4.166S30.753 6.25 25 6.25s-10.417 1.865-10.417 4.167c0 2.3 4.664 4.166 10.417 4.166"></svg:path></svg:g>`,
})
export class MarketeqBluntedConeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
