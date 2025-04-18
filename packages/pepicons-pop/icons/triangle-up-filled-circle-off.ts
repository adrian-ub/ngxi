import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleUpFilledCircleOffIcon],svg[pepicons-pop-triangle-up-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.134 7.501a1 1 0 0 1 1.732 0l5.769 10A1 1 0 0 1 18.769 19H7.23a1 1 0 0 1-.866-1.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M19.635 17.5a1 1 0 0 1-.866 1.5H7.23a1 1 0 0 1-.866-1.5l5.769-9.999a1 1 0 0 1 1.732 0zM13 12.003L10.694 16h4.612z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopTriangleUpFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
