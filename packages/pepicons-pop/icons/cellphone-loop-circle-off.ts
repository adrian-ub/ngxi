import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopCircleOffIcon],svg[pepicons-pop-cellphone-loop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.347 12.38a2.193 2.193 0 1 0-2.567 3.555a2.193 2.193 0 0 0 2.567-3.555m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L5.4 20.942a1 1 0 1 1-1.622-1.17l2.091-2.898a4.195 4.195 0 0 1-.205-5.17" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneLoopCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
