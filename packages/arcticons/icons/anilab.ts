import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnilabIcon],svg[arcticons-anilab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.594 41.08c-8.81-4.936-10.696-6.692-10.786-16.788c-.09-10.098 1.495-12.255 10.122-17.505s11.115-4.846 19.975 0c8.859 4.847 10.409 6.263 10.283 16.573c-.122 10.098-.635 12.47-9.26 17.72c-8.627 5.25-11.045 5.204-20.335 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.93 12.68l9.048 5.177c1.376.832 1.455 1.663 1.622 2.495l.25 2.932c.302 2.37-2.252 3.287-3.869 2.37L21.87 20.85c-.8-.499-1.666-1.279-1.997-2.464l-.5-2.588c-.348-2.536 1.974-3.793 3.557-3.119m-5.212 9.497l9.047 5.177c1.376.832 1.455 1.663 1.622 2.495l.25 2.932c.302 2.37-2.251 3.287-3.868 2.37l-8.112-4.803c-.8-.499-1.666-1.279-1.997-2.464l-.499-2.588c-.349-2.536 1.973-3.793 3.557-3.119"></svg:path>`,
})
export class ArcticonsAnilabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
