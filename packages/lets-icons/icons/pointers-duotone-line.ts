import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPointersDuotoneLineIcon],svg[lets-icons-pointers-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsPointersDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M12 2.5v2m0 5v2m0 5v5"></svg:path><svg:path stroke="#fff" d="M6.5 6.1c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C7.26 4.5 7.54 4.5 8.1 4.5h9.631c.282 0 .424 0 .554.036a1 1 0 0 1 .321.154c.11.08.198.19.374.41l.72.9c.286.357.428.536.483.733c.048.175.048.36 0 .534c-.055.197-.197.376-.483.733l-.72.9c-.176.22-.264.33-.374.41a1 1 0 0 1-.321.154c-.13.036-.272.036-.554.036H8.1c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6.5 8.74 6.5 8.46 6.5 7.9zm11 7c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H6.269c-.282 0-.424 0-.554.036a1 1 0 0 0-.321.154c-.11.08-.198.19-.374.41l-.72.9c-.286.357-.428.536-.483.733a1 1 0 0 0 0 .534c.055.197.197.376.483.732l.72.9c.176.221.264.331.374.41a1 1 0 0 0 .321.155c.13.036.272.036.554.036H15.9c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsPointersDuotoneLine0)"></svg:path>`,
})
export class LetsIconsPointersDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
