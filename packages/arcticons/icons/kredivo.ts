import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKredivoIcon],svg[arcticons-kredivo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.705 7.46L7.555 40.61c-.94.984-.89 1.023-.89-.317v-8.835c0-1.001.182-1.491.988-2.297l21.95-21.95c.546-.546.861-.71 1.706-.71h8.87c1.124-.015 1.307.178.526.959"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.764 29.401L29.65 40.806c.508.507.806.694 1.624.694h8.974c1.414 0 1.374-.043.312-1.137L24.426 23.739m-10.194-1.158V7.247c0-.707-.011-.746-.768-.746h-5.88c-.86 0-.919.045-.919.885h0v24.072"></svg:path>`,
})
export class ArcticonsKredivoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
