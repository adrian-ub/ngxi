import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTasksIcon],svg[fa-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1280h640v-128h-640zM640 768h1024V640H640zm640-512h384V128h-384zm512 832v256q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 832V576q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 320V64q0-26 19-45T64 0h1664q26 0 45 19t19 45"></svg:path>`,
})
export class FaTasksIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
