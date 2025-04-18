import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarCenterbeamFullIcon],svg[mdi-train-car-centerbeam-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v11h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1V6h2v9h18V6zM8 12H4v2h4zm7 0H9v2h6zm5 0h-4v2h4zM8 9H4v2h4zm7 0H9v2h6zm5 0h-4v2h4zM8 6H4v2h4zm7 0H9v2h6zm5 0h-4v2h4z"></svg:path>`,
})
export class MdiTrainCarCenterbeamFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
