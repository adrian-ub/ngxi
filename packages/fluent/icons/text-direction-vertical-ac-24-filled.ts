import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionVerticalAc24FilledIcon],svg[fluent-text-direction-vertical-ac-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M7 3a1 1 0 0 1 1 1v13.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V4a1 1 0 0 1 1-1zm8 12a1 1 0 1 1 2 0v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V15zm5-11a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1V4zm-8 0a1 1 0 1 0 0 2h3v.25c0 .895-.184 1.87-.642 2.586C13.939 9.49 13.255 10 12 10a1 1 0 1 0 0 2c1.945 0 3.26-.864 4.042-2.086c.742-1.158.958-2.56.958-3.664V5a1 1 0 0 0-1-1h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionVerticalAc24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
