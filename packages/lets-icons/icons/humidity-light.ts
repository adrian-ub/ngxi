import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHumidityLightIcon],svg[lets-icons-humidity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M12 21.5c4.101 0 7.5-3.063 7.5-6.929c0-2.415-1.233-4.859-2.627-6.862c-1.403-2.017-3.022-3.66-3.895-4.491a1.413 1.413 0 0 0-1.956 0c-.873.83-2.492 2.474-3.895 4.491C5.733 9.712 4.5 12.156 4.5 14.571c0 3.866 3.399 6.929 7.5 6.929Z"></svg:path><svg:path stroke-linecap="round" d="M12 18a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class LetsIconsHumidityLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
