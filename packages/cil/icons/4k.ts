import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cil4kIcon],svg[cil-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 184h-32v88h-62.32l13.6-136H95.12l-16.8 168H176v72h32v-72h32v-32h-32zm178.111-48l-52 104H304V136h-32v240h32V272h30.111l52 104h35.778l-60-120l60-120z"></svg:path><svg:path fill="currentColor" d="M464 16H48a32.036 32.036 0 0 0-32 32v416a32.036 32.036 0 0 0 32 32h416a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32m0 448H48V48h416l.02 416Z"></svg:path>`,
})
export class Cil4kIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
