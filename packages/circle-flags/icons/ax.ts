import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAxIcon],svg[circle-flags-ax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAx0)"><svg:path fill="#0052b4" d="M0 0h100.2l68.3 40.7L233.7 0H512v189.2l-45.5 66l45.5 68.6V512H233.7l-65.8-39.2l-67.7 39.2H0V322.8l45.6-67.5L0 189.2z"></svg:path><svg:path fill="#ffda44" d="M100.2 0v189.2H0v33.4l23 34l-23 32.8v33.4h100.2V512h33.4l33.9-22.6l32.8 22.6h33.4V323.8H512v-34.4l-24.2-32.2l24.2-34.6v-33.4H233.7V0h-33.4l-32.6 20l-34.1-20z"></svg:path><svg:path fill="#d80027" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsAxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
