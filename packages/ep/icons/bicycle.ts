import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epBicycleIcon],svg[ep-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 832a128 128 0 1 0 0-256a128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384a192 192 0 0 1 0 384"></svg:path><svg:path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32"></svg:path><svg:path fill="currentColor" d="M768 832a128 128 0 1 0 0-256a128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384a192 192 0 0 1 0 384"></svg:path><svg:path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z"></svg:path><svg:path fill="currentColor" d="m373.376 599.808l-42.752-47.616l320-288l42.752 47.616z"></svg:path>`,
})
export class EpBicycleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
