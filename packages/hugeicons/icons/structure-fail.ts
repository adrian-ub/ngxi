import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructureFailIcon],svg[hugeicons-structure-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.015 5c0-1.414 0-2.121.512-2.56C16.038 2 16.862 2 18.508 2c1.647 0 2.47 0 2.982.44c.512.439.512 1.146.512 2.56s0 2.121-.512 2.56c-.511.44-1.335.44-2.982.44c-1.646 0-2.47 0-2.981-.44c-.512-.439-.512-1.146-.512-2.56m0 14c0-1.414 0-2.121.512-2.56c.511-.44 1.335-.44 2.981-.44c1.647 0 2.47 0 2.982.44c.512.439.512 1.146.512 2.56s0 2.121-.512 2.56c-.511.44-1.335.44-2.982.44c-1.646 0-2.47 0-2.981-.44c-.512-.439-.512-1.146-.512-2.56m-6.474-8.518l-3.018 3.013m3.018 0l-3.018-3.013m1.522 6.55c2.765 0 4.965-2.26 4.965-5.038s-2.241-5.03-5.006-5.03m.041 10.068c-2.765 0-5.047-2.26-5.047-5.038s2.241-5.03 5.006-5.03m.041 10.068c-.07 2.13 1.487 2.907 2.595 2.948h2.37M7.004 6.964c-.07-2.16 1.513-2.92 2.636-2.967h2.38" color="currentColor"></svg:path>`,
})
export class HugeiconsStructureFailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
