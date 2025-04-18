import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontSpaceTrackingIn20FilledIcon],svg[fluent-font-space-tracking-in-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.7 2.482a.75.75 0 0 0-1.4 0l-3.25 8.495a.75.75 0 0 0 1.4.536l.773-2.018h3.555l.772 2.018a.75.75 0 0 0 1.4-.536zm.504 5.513H5.797L7 4.849zm-1.463 5.19a.75.75 0 1 0-.988 1.13l.498.435h-2.5a.75.75 0 0 0 0 1.5h2.5l-.498.436a.75.75 0 1 0 .988 1.128l2-1.751a.75.75 0 0 0 0-1.13zM13 12a.75.75 0 0 0 .7-.482l3.25-8.495a.75.75 0 1 0-1.401-.536L13 9.15l-2.55-6.664a.75.75 0 0 0-1.4.536l3.25 8.495A.75.75 0 0 0 13 12m1.312 5.744a.75.75 0 0 1-1.058.07l-2-1.748a.75.75 0 0 1 0-1.129l2-1.751a.75.75 0 1 1 .988 1.128l-.498.436h2.505a.75.75 0 0 1 0 1.5h-2.506l.498.435a.75.75 0 0 1 .071 1.059"></svg:path>`,
})
export class FluentFontSpaceTrackingIn20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
