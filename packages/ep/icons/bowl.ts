import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epBowlIcon],svg[ep-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M714.432 704a351.74 351.74 0 0 0 148.16-256H161.408a351.74 351.74 0 0 0 148.16 256zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32a415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424zM352 768v64h320v-64z"></svg:path>`,
})
export class EpBowlIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
