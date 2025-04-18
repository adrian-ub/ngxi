import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsHeadphonesSolidIcon],svg[rivet-icons-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 0 0-8 8v8h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H2a6 6 0 1 1 12 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4V8a8 8 0 0 0-8-8"></svg:path>`,
})
export class RivetIconsHeadphonesSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
