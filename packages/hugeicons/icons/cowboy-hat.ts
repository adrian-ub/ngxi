import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCowboyHatIcon],svg[hugeicons-cowboy-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.276 18c-.985 1.102-2.264 2-4.276 2s-3.29-.898-4.276-2m8.552 0c1.211-1.354 1.979-3.016 3.122-3.692M16.276 18c2.069 0 5.724.562 5.724-2.5c0-.787-.68-1.5-1.5-1.5c-.282 0-.54.053-.781.15m0 0q-.166.066-.321.158m.32-.159l-.32.16m0 0C18.073 14.955 15.68 16 12 16s-6.073-1.044-7.398-1.692M7.724 18c-1.211-1.354-1.979-3.016-3.122-3.692M7.724 18C5.655 18 2 18.562 2 15.5c0-.787.68-1.5 1.5-1.5c.282 0 .54.053.781.15m0 0q.166.066.321.158m-.32-.159l.32.16M6 12c0-1.505.442-5.37 2.576-7.599C8.838 4.127 9.2 4 9.567 4c.27 0 .523.144.673.384l.205.328c.347.555.93.888 1.555.888a1.84 1.84 0 0 0 1.555-.888l.205-.328A.8.8 0 0 1 14.433 4c.367 0 .729.127.991.401C17.558 6.631 18 10.495 18 12"></svg:path><svg:path d="M6.5 10c1.416.51 2.89 1 5.5 1s4.084-.49 5.5-1"></svg:path></svg:g>`,
})
export class HugeiconsCowboyHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
