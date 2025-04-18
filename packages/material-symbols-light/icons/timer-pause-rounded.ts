import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimerPauseRoundedIcon],svg[material-symbols-light-timer-pause-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.308 16.5q.213 0 .357-.144t.143-.356v-6q0-.213-.144-.356t-.357-.144t-.356.144t-.143.356v6q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-6q0-.213-.144-.356q-.144-.144-.356-.144q-.213 0-.357.144t-.143.356v6q0 .213.144.356t.357.144m-3.808-14q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h4.23q.213 0 .357.144t.144.357t-.144.356t-.356.143zM12 21q-1.649 0-3.108-.626t-2.55-1.716t-1.716-2.55T4 13t.626-3.108t1.716-2.55t2.55-1.716T12 5q1.454 0 2.812.52t2.492 1.469l.738-.739q.14-.14.345-.15t.363.15t.16.354t-.16.354l-.738.738q.95 1.135 1.469 2.493T20 13q0 1.649-.626 3.108t-1.716 2.55t-2.55 1.716T12 21"></svg:path>`,
})
export class MaterialSymbolsLightTimerPauseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
