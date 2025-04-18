import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimerOffIcon],svg[material-symbols-light-timer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.954 21.37l-2.515-2.516q-1.066 1.01-2.492 1.578T12 21q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13q0-1.538.549-2.935T6.146 7.56L2.631 4.046l.708-.708l17.323 17.324zM9.384 2.5v-1h5.232v1zm9.835 13.9L12.5 9.68V8.386h-1v.296L8.594 5.775q.777-.385 1.657-.58T12 5q1.423 0 2.774.51t2.51 1.479l1.093-1.093l.708.708l-1.093 1.092q.97 1.16 1.489 2.52T20 13q0 .858-.195 1.732t-.586 1.668"></svg:path>`,
})
export class MaterialSymbolsLightTimerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
