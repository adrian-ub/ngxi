import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMaslowPyramidsIcon],svg[icon-park-solid-maslow-pyramids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" d="m24 4l-9 15.98h18z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 19.98L24.008 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.347 25.975L2 42h15.005"></svg:path><svg:path stroke-linecap="round" d="M9.1 30.995h7.904"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.748 25.975L46.094 42H31"></svg:path><svg:path stroke-linecap="round" d="M39.094 30.995H31.1"></svg:path></svg:g>`,
})
export class IconParkSolidMaslowPyramidsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
