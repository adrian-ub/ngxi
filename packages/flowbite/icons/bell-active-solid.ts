import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBellActiveSolidIcon],svg[flowbite-bell-active-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.34 5.34 0 0 0-2.8 5.762l.276 1.473l.055.296c.258 1.374-.228 2.262-.63 2.998c-.285.52-.527.964-.437 1.449c.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27c-.103-.564-.636-1.123-1.195-1.711c-.606-.636-1.243-1.306-1.404-2.051c-.233-1.085-.275-1.387-.303-1.587c-.009-.063-.016-.117-.028-.182a5.34 5.34 0 0 0-5.353-4.39z"></svg:path><svg:path fill-rule="evenodd" d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069" clip-rule="evenodd"></svg:path><svg:path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3c1.6 0 2.9-1.1 3.3-2.5z"></svg:path></svg:g>`,
})
export class FlowbiteBellActiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
