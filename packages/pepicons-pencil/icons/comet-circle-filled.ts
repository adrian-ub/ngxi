import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCometCircleFilledIcon],svg[pepicons-pencil-comet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCometCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.66 16.418a1.5 1.5 0 1 0 2.28-1.95a1.5 1.5 0 0 0-2.28 1.95m2.765.925a2.5 2.5 0 1 1-3.25-3.8a2.5 2.5 0 0 1 3.25 3.8"></svg:path><svg:path d="M13.327 19.573a5.421 5.421 0 1 1-7.029-8.253l7.08-5.836c.719-.593 1.786.033 1.62.95l-.51 2.8l5.617-4.68c.87-.725 2.084.324 1.494 1.289l-3.39 5.547l1.91-.212c.97-.108 1.504 1.1.77 1.745zm-6.94-1.196a4.42 4.42 0 0 0 6.28.445l7.562-6.65l-1.91.212a1 1 0 0 1-.964-1.515l3.39-5.548l-5.616 4.681c-.718.598-1.792-.028-1.624-.947l.509-2.8l-7.08 5.837a4.42 4.42 0 0 0-.546 6.285"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCometCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCometCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
