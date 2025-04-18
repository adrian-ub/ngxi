import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSwordOffIcon],svg[pepicons-pencil-sword-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.912 12.084a.5.5 0 0 1-.002-.707l3.53-3.542a.5.5 0 0 1 .708.705l-3.53 3.543a.5.5 0 0 1-.706 0"></svg:path><svg:path d="M17.04 3.505a.5.5 0 0 0-.583-.582l-2.6.485a.5.5 0 0 0-.262.138L7.2 9.964a.5.5 0 0 0 0 .707l2.126 2.117a.5.5 0 0 0 .707 0l6.394-6.419a.5.5 0 0 0 .138-.263zm-.766-1.565a1.5 1.5 0 0 1 1.75 1.744l-.474 2.602a1.5 1.5 0 0 1-.413.79l-6.394 6.417a1.5 1.5 0 0 1-2.122.004L6.496 11.38a1.5 1.5 0 0 1-.004-2.122l6.394-6.418a1.5 1.5 0 0 1 .788-.416z"></svg:path><svg:path d="M3.31 9.618a2 2 0 0 1 2.83-.006l4.25 4.235a2 2 0 0 1-2.823 2.834l-4.251-4.235a2 2 0 0 1-.005-2.828m2.123.703a1 1 0 1 0-1.411 1.417l4.25 4.234a1 1 0 0 0 1.412-1.417z"></svg:path><svg:path d="m5.121 13.533l-2.823 2.834a.5.5 0 0 0 .001.707l.709.706a.5.5 0 0 0 .707-.001l2.823-2.834l.709.706l-2.824 2.834a1.5 1.5 0 0 1-2.12.003l-.71-.705a1.5 1.5 0 0 1-.003-2.122l2.823-2.833z"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilSwordOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
