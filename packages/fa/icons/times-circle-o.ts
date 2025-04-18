import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTimesCircleOIcon],svg[fa-times-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1097 951l-146 146q-10 10-23 10t-23-10L768 960l-137 137q-10 10-23 10t-23-10L439 951q-10-10-10-23t10-23l137-137l-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137l137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23L960 768l137 137q10 10 10 23t-10 23m215-183q0-148-73-273t-198-198t-273-73t-273 73t-198 198t-73 273t73 273t198 198t273 73t273-73t198-198t73-273m224 0q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaTimesCircleOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
