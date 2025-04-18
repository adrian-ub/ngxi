import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBuilding02Icon],svg[ci-building-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h8m-8 0V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v3.05M12 20h8m-8 0v-9.754M20 20h2m-2 0v-5.632c0-.525 0-.788-.063-1.033a2 2 0 0 0-.272-.61c-.14-.21-.335-.386-.726-.737l-2.3-2.067c-.756-.679-1.134-1.018-1.562-1.147a2 2 0 0 0-1.154 0c-.428.129-.806.468-1.562 1.147l-.361.325"></svg:path>`,
})
export class CiBuilding02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
