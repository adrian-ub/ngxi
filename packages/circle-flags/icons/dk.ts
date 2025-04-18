import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsDkIcon],svg[circle-flags-dk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsDk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsDk0)"><svg:path fill="#d80027" d="M0 0h133.6l32.7 20.3l34-20.3H512v222.6L491.4 256l20.6 33.4V512H200.3l-31.7-20.4l-35 20.4H0V289.4l29.4-33L0 222.7z"></svg:path><svg:path fill="#eee" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsDkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
