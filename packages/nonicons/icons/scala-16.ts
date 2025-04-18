import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsScala16Icon],svg[nonicons-scala-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.712.261a.77.77 0 0 1 .288.6v12.123c0 .35-.234.653-.568.738l-8.5 2.155a.74.74 0 0 1-.644-.138a.77.77 0 0 1-.288-.6V3.016c0-.35.234-.653.568-.738l8.5-2.155a.74.74 0 0 1 .644.138M4.5 3.61v2.323l7-1.886V1.835zm7 2.012l-7 1.885v2.617l7-1.775zm0 4.295l-7 1.775v2.473l7-1.775z"></svg:path>`,
})
export class NoniconsScala16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
