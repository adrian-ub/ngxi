import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsNiceEnginframeIcon],svg[aws-nice-enginframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#ED7100"></svg:rect><svg:path fill="#FFF" d="M7.861,22.998 C9.946,27.727 15.573,31 22,31 C30.271,31 37,25.617 37,19 C37,12.384 30.271,7 22,7 C15.573,7 9.946,10.274 7.861,15.003 C7.907,15.001 7.954,15 8,15 L26,15 C28.206,15 30,16.795 30,19 C30,21.206 28.206,23 26,23 L8,23 C7.954,23 7.907,22.999 7.861,22.998 M22,33 C13.885,33 6.872,28.247 5.322,21.696 C5.227,21.293 5.39,20.873 5.732,20.64 C6.075,20.407 6.526,20.41 6.865,20.644 C7.202,20.877 7.593,21 8,21 L26,21 C27.102,21 28,20.103 28,19 C28,17.897 27.102,17 26,17 L8,17 C7.593,17 7.202,17.123 6.865,17.357 C6.526,17.592 6.075,17.594 5.732,17.361 C5.39,17.127 5.227,16.707 5.322,16.305 C6.872,9.754 13.885,5 22,5 C31.374,5 39,11.281 39,19 C39,26.72 31.374,33 22,33 M22,2 C10.971,2 2,9.626 2,19 C2,28.374 10.971,36 22,36 C33.028,36 42,28.374 42,19 C42,9.626 33.028,2 22,2 M22,38 C9.869,38 0,29.477 0,19 C0,8.524 9.869,0 22,0 C34.131,0 44,8.524 44,19 C44,29.477 34.131,38 22,38" transform="translate(10 13)"></svg:path></svg:g>`,
})
export class AwsNiceEnginframeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
