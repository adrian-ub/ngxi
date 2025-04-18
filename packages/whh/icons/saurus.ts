import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSaurusIcon],svg[whh-saurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m864 288l-77 179l-147-147l-77 179l-115-115l-103 154l-121-122l-94 169q-58-99-94-203T0 192q0-61 38-106t95-65.5T256 0q102 0 229 12.5t250 35t206 61t83 83.5q0 108-29 227zM233 521l119 119l102-154l122 122l93-163l131 131l93-163l81 81q-46 146-110 210q-41 41-135.5 71.5t-185 43.5T384 832q-43 0-101.5-52.5T166 642z"></svg:path>`,
})
export class WhhSaurusIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
