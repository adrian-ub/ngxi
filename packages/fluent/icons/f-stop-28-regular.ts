import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop28RegularIcon],svg[fluent-f-stop-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.352 7.939a4.25 4.25 0 0 1 5.664-3.164l.47.177a.75.75 0 1 0 .527-1.404l-.47-.177c-3.328-1.248-6.98.792-7.663 4.28L13.03 12H7.75a.75.75 0 1 0 0 1.5h4.986l-1.088 5.561a4.25 4.25 0 0 1-5.663 3.163l-.472-.176a.75.75 0 0 0-.526 1.404l.471.177c3.328 1.248 6.98-.792 7.662-4.28l1.144-5.85h4.986a.75.75 0 0 0 0-1.5h-4.692z"></svg:path>`,
})
export class FluentFStop28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
