import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteLighthouseLineIcon],svg[mingcute-lighthouse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M12 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" d="m12.832 2.353l2.516 1.677c.39.26.636.687.665 1.155l.241 3.847a1 1 0 0 1 .118 1.896L16.94 20H19a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h2.06l.568-9.072a1 1 0 0 1 .118-1.896l.24-3.847a1.5 1.5 0 0 1 .666-1.155l2.516-1.677a1.5 1.5 0 0 1 1.664 0M14.373 11H9.627l-.563 9h5.871zM4.293 8.293a1 1 0 0 1 1.497 1.32l-.083.094l-1 1a1 1 0 0 1-1.497-1.32l.083-.094zm14 0a1 1 0 0 1 1.32-.083l.094.083l1 1a1 1 0 0 1-1.32 1.497l-.094-.083l-1-1a1 1 0 0 1 0-1.414M12 4.202L9.967 5.557L9.752 9h4.496l-.215-3.443zm-7.293.09l1 1a1 1 0 0 1-1.414 1.415l-1-1a1 1 0 0 1 1.414-1.414Zm16 0a1 1 0 0 1 0 1.415l-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0Z"></svg:path></svg:g>`,
})
export class MingcuteLighthouseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
