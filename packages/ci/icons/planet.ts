import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPlanetIcon],svg[ci-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.898 18.162a8 8 0 0 0 12.93-7.821m-12.93 7.82a8 8 0 1 1 12.93-7.821m-12.93 7.822c1.955-.447 4.282-1.38 6.628-2.734c2.73-1.576 4.951-3.416 6.302-5.088m-12.93 7.822c-2.43.555-4.286.362-4.898-.698c-.63-1.091.196-2.867 2-4.755m15.828-2.369c1.252-1.55 1.756-2.956 1.224-3.876c-.539-.933-2.043-1.195-4.052-.865"></svg:path>`,
})
export class CiPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
