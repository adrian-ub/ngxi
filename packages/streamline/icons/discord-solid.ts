import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscordSolidIcon],svg[streamline-discord-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.226 2.768c-.425.697-.868 1.86-1.213 3.204c-.35 1.366-.586 2.869-.604 4.17c.338.417 1.259 1.219 2.78 1.595l1.088-1.36c-.526-.19-.968-.433-1.246-.711a.5.5 0 0 1 .707-.707c.205.204.729.478 1.502.66l.007.002a7.1 7.1 0 0 0 3.23 0h.006c.774-.184 1.298-.458 1.502-.662a.5.5 0 1 1 .708.707c-.278.278-.72.521-1.246.71l1.088 1.36c1.521-.375 2.442-1.177 2.78-1.593c-.018-1.302-.254-2.805-.604-4.171c-.345-1.345-.788-2.507-1.213-3.204l-.03-.009a6 6 0 0 0-.714-.156c-.711-.119-1.925-.242-3.892-.242s-3.18.123-3.892.242c-.355.06-.582.117-.714.156l-.03.01Zm-.331-.41a31 31 0 0 1-.223-.448h.002l.003-.002l.008-.004l.02-.009l.059-.024q.071-.029.204-.07c.179-.053.448-.12.838-.185c.78-.13 2.05-.255 4.056-.255s3.277.126 4.056.255c.39.065.66.132.838.186a3 3 0 0 1 .263.093l.02.01l.008.003l.003.001l.001.001h.001l-.223.448M4.407 7.077a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5.91-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDiscordSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
