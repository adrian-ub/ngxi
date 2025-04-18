import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningIcon],svg[healthicons-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918a2 2 0 0 1 .403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934z"></svg:path><svg:path d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028z"></svg:path></svg:g>`,
})
export class HealthiconsRunningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
