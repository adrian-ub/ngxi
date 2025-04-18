import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructureCheckIcon],svg[hugeicons-structure-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.021 5c0-1.414 0-2.121.511-2.56c.512-.44 1.334-.44 2.98-.44s2.468 0 2.979.44C22 2.878 22 3.585 22 5s0 2.121-.51 2.56s-1.333.44-2.98.44s-2.467 0-2.979-.44c-.51-.439-.51-1.146-.51-2.56m0 14c0-1.414 0-2.121.511-2.56c.512-.44 1.334-.44 2.98-.44s2.468 0 2.979.44c.51.439.51 1.146.51 2.56s0 2.121-.51 2.56c-.511.44-1.334.44-2.98.44s-2.467 0-2.979-.44c-.51-.439-.51-1.146-.51-2.56m-7.967-1.956c2.77 0 4.975-2.26 4.975-5.039a5.023 5.023 0 0 0-5.016-5.03m.041 10.069c-2.77 0-5.057-2.26-5.057-5.039a5.023 5.023 0 0 1 5.016-5.03m.041 10.069c-.07 2.13 1.49 2.907 2.6 2.948h2.375M7.014 6.976c-.07-2.16 1.516-2.92 2.64-2.968h2.387"></svg:path><svg:path d="m8.71 10.88l-2.072 2.166a.2.2 0 0 1-.286.002l-.972-1.002"></svg:path></svg:g>`,
})
export class HugeiconsStructureCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
