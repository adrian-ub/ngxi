import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPanelGlassDoor3CloseIcon],svg[cbi-panel-glass-door3-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 2.14l-11.98.03v20H1.37v.76H22.7Zm-7.604 2.158h3.065l-.006 4.234h-3.072zm.125.163v3.908h2.789V4.461zm.119.129h2.55v3.6h-2.55Zm-.285 5.25l3.127.007l.007 4.309h-3.147zm.166.21v3.91h2.789v-3.91zm.119.14h2.55v3.6h-2.55zm-.305 5.563l3.188.007l-.04 4.325l-3.169-.014zm.186.218v3.91h2.789v-3.91zm.119.138h2.55v3.602h-2.55z"></svg:path>`,
})
export class CbiPanelGlassDoor3CloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
