import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiExplicitIcon],svg[zmdi-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 128V85H128v214h128v-43h-85v-43h85v-42h-85v-43z"></svg:path>`,
})
export class ZmdiExplicitIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
