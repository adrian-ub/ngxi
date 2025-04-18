import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EgnyteLogoIcon],svg[fluent-mdl2-egnyte-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1843 662l-663 488v770H870v-768q-1-1-28-21t-71-52t-100-75t-117-86t-119-87t-107-78t-81-60t-42-31l262-193l557 410l557-411zm-431 599l418 308l-92 125l-418-308zm-309-613H947V128h156zm-467 613l92 125l-418 308l-92-125z"></svg:path>`,
})
export class FluentMdl2EgnyteLogoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
