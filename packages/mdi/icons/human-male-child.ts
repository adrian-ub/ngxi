import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleChildIcon],svg[mdi-human-male-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M5 7c-1.11 0-2 .89-2 2v6h2v7h5V11.6l2.53 4.4h2.44L16 14.66V22h4v-5h1v-3c0-1.11-.89-2-2-2h-2.5c-.6 0-1.13.26-1.5.68c-.33.42-.68.88-1 1.32h-.31L10 7.66C9.84 7.38 9.22 7 8.5 7zm13 1c-.83 0-1.5.67-1.5 1.5S17.17 11 18 11s1.5-.67 1.5-1.5S18.83 8 18 8"></svg:path>`,
})
export class MdiHumanMaleChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
