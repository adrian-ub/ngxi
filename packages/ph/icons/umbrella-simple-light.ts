import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleLightIcon],svg[ph-umbrella-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21m-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65a2 2 0 0 1-.53-1.56a98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z"></svg:path>`,
})
export class PhUmbrellaSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
