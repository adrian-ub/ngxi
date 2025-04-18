import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAuNswIcon],svg[circle-flags-au-nsw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAuNsw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAuNsw0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M402 185h-40a74 74 0 0 0-51 51v40a74 74 0 0 0 51 51h40a74 74 0 0 0 51-51v-40a74 74 0 0 0-51-51"></svg:path><svg:path fill="#d80027" d="M382 182a74 74 0 0 0-20 3v51h-51a74 74 0 0 0-3 20a74 74 0 0 0 3 20h51v51a74 74 0 0 0 20 3a74 74 0 0 0 20-3v-51h51a74 74 0 0 0 3-20a74 74 0 0 0-3-20h-51v-51a74 74 0 0 0-20-3"></svg:path><svg:path fill="#ffda44" d="m382 295l-3 8l-8-4l4 8l-8 3l8 3l-4 8l8-4l3 8l3-8l8 4l-4-8l8-3l-8-3l4-8l-8 4zm54-54l-3 8l-8-4l4 8l-8 3l8 3l-4 8l8-4l3 8l3-8l8 4l-4-8l8-3l-8-3l4-8l-8 4zm-108 0l-3 8l-8-4l4 8l-8 3l8 3l-4 8l8-4l3 8l3-8l8 4l-4-8l8-3l-8-3l4-8l-8 4zm54-54l-3 8l-8-4l4 8l-8 3l8 3l-4 8l8-4l3 8l3-8l8 4l-4-8l8-3l-8-3l4-8l-8 4zm-10 52a7 7 0 0 0-6 6v5h-3v-2c0-3-3-6-6-6l-1 2v12l2 1h8a6 6 0 0 0 6 7v2h-3a5 5 0 0 0-5 6l1 1h12l2-1v-8l17-1v3h-3a5 5 0 0 0-5 5l1 2h13l1-2v-16c3 0 5-2 5-5c0-2-2-5-5-5h-16l-2-1l2-2h16v-3h-16a5 5 0 0 0-5 5c0 2 2 5 5 5h16l2 1l-2 2h-18a6 6 0 0 1-6-7a7 7 0 0 0-7-6"></svg:path></svg:g>`,
})
export class CircleFlagsAuNswIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
