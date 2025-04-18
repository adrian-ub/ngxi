import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSwiftIcon],svg[tabler-brand-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.547 15.828C21.877 11.702 19.163 6.307 14.5 3c-.135-.096 2.39 6.704 1.308 9.124Q12.578 9.944 8 6l-.5 2L4 7q6.54 7.122 8.56 8.841C7.902 17.93 1.91 14.863 2 15c1.016 1.545 6 6 11 6c2 0 3.788-.502 4.742-1.389c.005-.005.432-.446 1.378-.17q.755.221 2.88 1.559v-1.507c0-1.377-.515-2.67-1.453-3.665"></svg:path>`,
})
export class TablerBrandSwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
