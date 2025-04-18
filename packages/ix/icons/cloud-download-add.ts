import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadAddIcon],svg[ix-cloud-download-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-166.4-277.333c50.074 0 90.667 40.41 90.667 90.256l-.028 2.271c31.292 7.995 54.428 36.275 54.428 69.935c0 38.669-30.536 70.239-68.914 72.116l-3.62.089l-119.467-.001v76.486L256 311.164l30.17 30.17l-94.17 94.17l-94.17-94.17l30.17-30.17l42.666 42.654v-76.485h-37.332l.007-.403c-50.836-4.557-90.674-47.086-90.674-98.878c0-54.832 44.652-99.282 99.733-99.282c14.155 0 27.622 2.935 39.819 8.228c15.767-26.537 44.82-44.331 78.048-44.331m-1.6 42.667c-17.444 0-33.35 8.263-42.936 21.7l-1.83 2.756l-15.601 25.247l-28.091-11.722c-7.552-3.151-15.728-4.798-24.209-4.798c-33.505 0-60.666 25.999-60.666 58.07c0 29.063 22.418 53.42 51.927 57.476l3.188.356l2.865.238l183.837.01l2.608-.051c18.372-.865 32.908-15.437 32.908-33.142c0-14.336-9.591-26.857-23.35-31.384l-2.628-.754l-26.72-6.564l.698-27.664c0-27.49-23.281-49.774-52-49.774"></svg:path>`,
})
export class IxCloudDownloadAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
