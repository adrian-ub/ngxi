import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCompileIcon],svg[whh-compile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1013 588l-456 419q-18 18-43.5 18t-43.5-18L13 588Q2 577 1 558.5t7-32T28 513h229v-64h128v-64H257V257h128v64h128v-64H385v-65H257V64h128v64h64V0h128v128h-64v129h128V128h64V0h129v128h-65v129H641v64h129v192h228q11 0 19.5 13.5t7.5 32t-12 29.5M641 385H513v64h128z"></svg:path>`,
})
export class WhhCompileIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
