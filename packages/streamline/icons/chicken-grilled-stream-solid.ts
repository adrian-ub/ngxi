import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChickenGrilledStreamSolidIcon],svg[streamline-chicken-grilled-stream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.15 1.145a.625.625 0 1 0-1.25 0v1.563a.625.625 0 1 0 1.25 0zm-2.907.538c.346 0 .625.28.625.625v1.563a.625.625 0 0 1-1.25 0V2.308c0-.345.28-.625.625-.625m4.563 0c.345 0 .625.28.625.625v1.563a.625.625 0 0 1-1.25 0V2.308c0-.345.28-.625.625-.625m5.658 1.526a1.455 1.455 0 0 0-1.362 1.97l-1.077.994c-.61-.268-1.348-.225-2.012.103a2.8 2.8 0 0 0-.666.543c-.846.929-.901 2.15-.349 2.866q.085.11.191.207a.5.5 0 1 1-.673.74a2.6 2.6 0 0 1-.309-.336c-.912-1.18-.697-2.944.4-4.15l.028-.03C4.562 5.501 1.862 6.23.67 8.608c-.918 1.834-.57 3.335-.252 4.101c.22.532.743.771 1.22.771h10.303a1.5 1.5 0 0 0 1.5-1.5v-.297c0-.676-.111-1.315-.463-1.89c-.268-.439-.657-.809-1.18-1.127a3.8 3.8 0 0 1-.826 1.455a.5.5 0 1 1-.74-.673c.666-.731.841-1.633.62-2.337l1.115-1.031l.034-.034a1.455 1.455 0 1 0 .462-2.836Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChickenGrilledStreamSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
