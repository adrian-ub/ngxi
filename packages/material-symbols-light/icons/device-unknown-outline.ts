import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceUnknownOutlineIcon],svg[material-symbols-light-device-unknown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.558q-.271 0-.468-.198q-.197-.197-.197-.468q0-.27.197-.468q.197-.197.468-.197t.468.197t.197.468t-.197.468q-.197.198-.468.198m-.442-2.777q0-.766.245-1.258t.928-1.108q.408-.388.667-.735t.26-.85q0-.546-.405-.992T12 8.392q-.713 0-1.083.34t-.57.783l-.812-.319q.3-.721.919-1.199T12 7.519q1.079 0 1.81.609q.732.608.732 1.691q0 .581-.251 1.02q-.252.438-.683.869q-.731.73-.93 1.088q-.197.358-.236.985zM7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm0-14h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceUnknownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
