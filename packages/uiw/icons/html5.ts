import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwHtml5Icon],svg[uiw-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.5 0l1.547 18l6.943 2l6.961-2.002L18.5 0zm13.773 4.272l-.097 1.119l-.043.496H6.99l.195 2.26h7.756l-.052.594l-.5 5.812l-.032.373L10 16.178l-.01.004l-4.36-1.256l-.297-3.467h2.136l.151 1.762l2.37.663h.002l2.374-.665l.247-2.863H5.237l-.523-6.084l-.05-.593h10.66z"></svg:path>`,
})
export class UiwHtml5Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
