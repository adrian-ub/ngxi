import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsHawIcon],svg[circle-flags-haw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsHaw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsHaw0)"><svg:path fill="#eee" d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64l32 64v64l-32 64l32 64v64l-256 32L0 448v-64l32-64z"></svg:path><svg:path fill="#0052b4" d="m173 128l83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0zm224 256v-31l-97-97h-31zM0 448v64h512v-64z"></svg:path></svg:g>`,
})
export class CircleFlagsHawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
